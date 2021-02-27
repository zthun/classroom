using System;

namespace Zthunworks.DomainPrinter
{
    public class MainClass
    {
        public static void Main(string[] args)
        {
            // There are multiple ways to do this, but since we are using a font that includes special characters
            // and we don't have any kind of need to print a quote within a quote, the cleanest is to just use the
            // @ character before the string to treat everything between two quotes as literals.
            Console.WriteLine(@"  _______   _                                   _        ");
            Console.WriteLine(@" |___  / | | |                                 | |       ");
            Console.WriteLine(@"    / /| |_| |__  _   _ _ ____      _____  _ __| | _____ ");
            Console.WriteLine(@"   / / | __| '_ \| | | | '_ \ \ /\ / / _ \| '__| |/ / __|");
            Console.WriteLine(@"  / /__| |_| | | | |_| | | | \ V  V / (_) | |  |   <\__ \");
            Console.WriteLine(@" /_____|\__|_| |_|\__,_|_| |_|\_/\_/ \___/|_|  |_|\_\___/");
        }
    }
}
