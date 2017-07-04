//
//  EGOMapManager.m
//  iosNativeUiComponents
//
//  Created by Derek on 03/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "EGOMapManager.h"
#import "EGOMap.h"
#import <MapKit/MapKit.h>
#import <React/UIView+React.h>
#import "RCTConvert+ECoreLocation.h"
#import "RCTConvert+EMapKit.h"

@interface EGOMapManager() <MKMapViewDelegate>
@end

@implementation EGOMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, EGOMap)
{
  [view setRegion:json? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  EGOMap *map = [EGOMap new];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

-(void)mapView:(EGOMap *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if(!mapView.onChange){
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  
  // Excute Block
  mapView.onChange(@{
                     @"region": @{
                         @"latitude": @(region.center.latitude),
                         @"longitude": @(region.center.longitude),
                         @"latitudeDelta": @(region.span.latitudeDelta),
                         @"longitudeDelta": @(region.span.longitudeDelta),
                      }
                    });
  
}

@end
