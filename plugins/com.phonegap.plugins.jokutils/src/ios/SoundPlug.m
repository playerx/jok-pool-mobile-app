//
//  Created by Jesse MacFadyen on 10-05-29.
//  Copyright 2010 Nitobi. All rights reserved.
//  Copyright (c) 2011, IBM Corporation
//  Copyright 2011, Randy McMillan
//  Copyright 2012, Andrew Lunny, Adobe Systems
//

#import "SoundPlug.h"

@implementation SoundPlug

- (void) play:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options
{
    NSBundle * mainBundle = [NSBundle mainBundle];
    NSMutableArray *directoryParts = [NSMutableArray arrayWithArray:[(NSString*)[arguments objectAtIndex:0] componentsSeparatedByString:@"/"]];
    NSString       *filename       = [directoryParts lastObject];
    [directoryParts removeLastObject];

    NSMutableArray *filenameParts  = [NSMutableArray arrayWithArray:[filename componentsSeparatedByString:@"."]];
    NSString *directoryStr = [directoryParts componentsJoinedByString:@"/"];

    NSString *filePath = [mainBundle pathForResource:(NSString*)[filenameParts objectAtIndex:0]
                                              ofType:(NSString*)[filenameParts objectAtIndex:1]
                                         inDirectory:directoryStr];

    SystemSoundID soundID;
    NSURL *fileURL = [NSURL fileURLWithPath:filePath];

    AudioServicesCreateSystemSoundID((CFURLRef)fileURL, &soundID);   
    AudioServicesPlaySystemSound(soundID);
}

@end