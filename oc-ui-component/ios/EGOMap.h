//
//  EGOMap.h
//  iosNativeUiComponents
//
//  Created by Derek on 04/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

@interface EGOMap: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
