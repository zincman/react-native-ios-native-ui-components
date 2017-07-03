//
//  EGOMapManager.m
//  iosNativeUiComponents
//
//  Created by Derek on 03/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>
#import "RCTConvert+ECoreLocation.h"
#import "RCTConvert+EMapKit.h"

@interface EGOMapManager: RCTViewManager
@end

@implementation EGOMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
