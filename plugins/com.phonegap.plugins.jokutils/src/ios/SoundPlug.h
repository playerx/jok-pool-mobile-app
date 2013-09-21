//
//  Created by Jesse MacFadyen on 10-05-29.
//  Copyright 2010 Nitobi. All rights reserved.
//  Copyright (c) 2011, IBM Corporation
//  Copyright 2011, Randy McMillan
//  Copyright 2012, Andrew Lunny, Adobe Systems
//

#import <Cordova/CDVPlugin.h>
#import <AudioToolbox/AudioServices.h>

@interface SoundPlug : CDVPlugin {
}

- (void) play:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end