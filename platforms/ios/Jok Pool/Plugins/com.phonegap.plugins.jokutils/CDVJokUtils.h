//
//  Echo.h
//  Jok Pool
//
//  Created by Ezeki Zibzibadze on 9/21/13.
//
//

#import <Cordova/CDVPlugin.h>
#import <AudioToolbox/AudioServices.h>

#import "Chartboost.h"

@interface CDVJokUtils : CDVPlugin
    
- (void)playAudio:(CDVInvokedUrlCommand*)command;

- (void)showAds:(CDVInvokedUrlCommand*)command;
    
@end
