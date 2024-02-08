import {
  ZBox,
  ZButton,
  ZCard,
  ZGrid,
  ZIconFontAwesome,
  ZNewspaper,
  ZParagraph,
  ZYouTubeVideo,
  useFashionTheme,
  useNavigate
} from '@zthun/fashion-boutique';
import { ZSizeFixed, ZSizeVaried } from '@zthun/fashion-tailor';
import React from 'react';
import { Routes } from '../routes.mjs';

// cspell:disable-next-line
const ZSchoolIntroductionYouTubeIdentity = 'ahCwqrYpIuM';

export function ZSchoolPage() {
  const { primary } = useFashionTheme();
  const navigate = useNavigate();

  return (
    <ZGrid alignItems='center' justifyContent='center'>
      <ZCard
        className='ZSchoolPage-root'
        width={ZSizeFixed.ExtraLarge}
        avatar={<ZIconFontAwesome name='school' width={ZSizeFixed.Medium} />}
        heading='Zthunworks University'
        subHeading='Not a real institution'
        footer={
          <ZButton
            className='ZSchoolPage-navigate-to-lessons'
            width={ZSizeVaried.Full}
            fashion={primary}
            name='navigate-to-lessons'
            label='Get Started With Lessons'
            onClick={() => navigate(Routes.lessons())}
          />
        }
      >
        <ZBox margin={{ bottom: ZSizeFixed.Large }}>
          <ZNewspaper range={[1, 12]}>
            <ZYouTubeVideo identity={ZSchoolIntroductionYouTubeIdentity} />
          </ZNewspaper>
        </ZBox>

        <ZParagraph>
          So, you have made the decision to embark on a career in Computer Science, with a specific focus on software
          engineering. This is an excellent choice—investing in your education is always a valuable pursuit, as
          knowledge is an asset that cannot be taken away. Software Engineers have the opportunity to create incredible
          things, tackle complex problems, enjoy lucrative careers, and stay abreast of evolving technologies. Whether
          you are already a seasoned Software Developer looking to advance or someone seeking a refresher on existing
          knowledge, the world of Software Engineering offers continuous learning.
        </ZParagraph>

        <ZParagraph>
          If you find yourself new to the field, with no prior experience or knowledge of software development, you are
          facing a significant challenge. The realm of software encompasses nearly a century of history and a multitude
          of techniques; where does one even begin? While attending college is a solid choice for gaining a
          comprehensive understanding of computer science—covering history, theory, and techniques—it comes with the
          potential drawback of accumulating substantial student debt, taking years or even decades to repay.
          Alternatively, coding boot camps provide a quicker and more cost-effective option, typically spanning just
          three months, yet they may offer limited coverage and focus primarily on securing employment.
        </ZParagraph>

        <ZParagraph>
          This brings us to Zthunworks University, which is designed to equip you with the skills needed to become a
          proficient developer. While I do recommend pursuing a college education for the unique interpersonal and
          social skills it imparts, I understand that financial constraints or other factors may make it impractical at
          the moment. In such cases, temporary reliance on online resources, such as YouTube videos and guides, can
          serve as a viable substitute. Moving forward, we will delve into training sessions that focus on techniques,
          tools, languages, and methodologies, with the aim of transforming you into the most adept developer possible.
          Get ready to &quot;git gud!&quot; — your journey into excellence has just begun.
        </ZParagraph>
      </ZCard>
    </ZGrid>
  );
}
