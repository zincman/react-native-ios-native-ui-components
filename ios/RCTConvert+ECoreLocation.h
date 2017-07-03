//
//  RCTConvert+CoreLocation.h
//  iosNativeUiComponents
//
//  Created by Derek on 03/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <CoreLocation/CoreLocation.h>

@interface RCTConvert (CoreLocation)

+ (CLLocationCoordinate2D)CLLocationCoordinate2D:(id)json;

@end
