/* istanbul ignore file --@preserve */
import { Module } from '@nestjs/common';
import { ZDatabaseOptionsBuilder } from '@zthun/dalmart-db';
import { ZDatabaseJsonFolder } from '@zthun/dalmart-fs';
import { required } from '@zthun/helpful-fn';
import { walk } from '@zthun/helpful-node';
import { ZDatabaseToken } from './database.mjs';

async function createAssetsDatabase() {
  const assets = await required(walk('assets'));
  const options = new ZDatabaseOptionsBuilder().url(assets).build();
  return new ZDatabaseJsonFolder(options);
}

@Module({
  providers: [{ provide: ZDatabaseToken, useFactory: createAssetsDatabase }],
  exports: [ZDatabaseToken]
})
export class ZDatabaseModule {}
