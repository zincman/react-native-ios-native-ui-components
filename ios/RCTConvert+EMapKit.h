//
//  RCTConvert+MapKit.h
//  iosNativeUiComponents
//
//  Created by Derek on 03/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>

@interface RCTConvert (MapKit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end
