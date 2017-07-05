//
//  WebViewController.m
//  ocPresentViewcontroller
//
//  Created by Derek on 05/07/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "WebViewController.h"

#define K_JSBIN_URL @"https://jsbin.com/meniw"
#define BAIDU_URL @"https://www.baidu.com"

@interface WebViewController ()

@property (strong, nonatomic) WKWebView *webView;
@property (weak, nonatomic) IBOutlet UIView *contentView;

@end

@implementation WebViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  
  // First create a WKWebViewConfiguration object so we can add a controller
  // pointing back to this ViewController.
  WKWebViewConfiguration *configuration = [[WKWebViewConfiguration alloc] init];
  WKUserContentController *controller = [[WKUserContentController alloc] init];
  
  // Add a script handler for the "observe" call. This is added to every frame
  // in the document (window.webkit.messageHandlers.NAME).
//  [controller addScriptMessageHandler:self name:@"observe"];
  configuration.userContentController = controller;
  
  // Initialize the WKWebView with the current frame and the configuration
  // setup above
  _webView = [[WKWebView alloc] initWithFrame:self.contentView.frame configuration:configuration];
  
  // This is the URL to be loaded into the WKWebView.
  NSURL *jsbin = [NSURL URLWithString: @"https://www.baidu.com"];
  
  // Load the jsbin URL into the WKWebView and then add it as a sub-view.
  [_webView loadRequest:[NSURLRequest requestWithURL:jsbin]];
  [self.contentView addSubview:_webView];
  

  
  
  NSLog(@"This is Request: %@", jsbin);
  
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
}





@end
