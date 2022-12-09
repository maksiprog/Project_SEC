import React from "react";
import { View } from "react-native";
import VideoComponent from "../components/VideoComponent";
import Swiper from "react-native-swiper";

type Props = {
  children: React.ReactNode;
};

export const OnboardingSwiper = ({ children }: Props) => {
  return (
    <View className="h-screen">
      <Swiper
        dot={
          <View className="w-2 h-2 bg-neutral-700 rounded-md mx-2 bottom-5" />
        }
        activeDot={
          <View className="w-2 h-2 bg-neutral-200 rounded-md mx-2 bottom-5" />
        }
        loop={false}
      >
        <View className=" flex-1 bg-transparent">
          <VideoComponent url="https://scontent.cdninstagram.com/v/t50.2886-16/272376409_1062489724298792_5523255840569503548_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=j-KqVXTjha0AX-jJrtD&edm=AJBgZrYBAAAA&vs=4946474895414245_1878992728&_nc_vs=HBksFQAYJEdGa2lQQkFvSnBncVZNWURBRHd2djJ6c2k2Wk1icV9FQUFBRhUAAsgBABUAGCRHR0dyT0JDVVg0MkJvSllBQUlMeDd6X0FmX0IwYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAm9OHwj4Hs0kAVAigCQzMsF0AmVP3ztkWiGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&ccb=7-5&oh=00_AfCn3_fNGQ0ObmTqAJVmfnrBTKVOP1y5RdrubHWNPW3x7g&oe=63947FE6&_nc_sid=78c662&dl=1" />
        </View>
        <View className=" flex-1 bg-transparent">
          <VideoComponent url="https://scontent.cdninstagram.com/v/t50.2886-16/300117983_389501103267124_8993106180291941863_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=-_bRgbbAcpcAX9kCWHn&edm=AJBgZrYBAAAA&vs=1931796167027175_3851465160&_nc_vs=HBksFQAYJEdOOXY0eEUwWGViS1AySUJBT2ZWcTJkczdzMThicV9FQUFBRhUAAsgBABUAGCRHRFFsNGhIdmVjVDhPZjhCQUV5TDBGZTk1Tk0wYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmtOe7pZfy8z8VAigCQzMsF0AzVT987ZFoGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&_nc_rid=e887b10190&ccb=7-5&oh=00_AfBaf8LbHdIw4duFAl3jgbTC4NJfn53lfaDir8rwtbM46w&oe=63946BBF&_nc_sid=78c662&dl=1" />
        </View>
        <View className=" flex-1 bg-transparent">
          <VideoComponent url="https://scontent.cdninstagram.com/v/t50.2886-16/292831037_157901863479669_7878578215204222614_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=BIZh69o8nOEAX_Q381Q&edm=AJBgZrYBAAAA&vs=412336867578252_4066102835&_nc_vs=HBksFQAYJEdEMC1kQkYxYVh0a25JOEFBSmIyWU93a1ZWWnRicV9FQUFBRhUAAsgBABUAGCRHQ2NKYnhFVVBNcnNPWGtEQU1pX01JZURTY1p5YnFfRUFBQUYVAgLIAQAoABgAGwAVAAAm5s%2Bn7Infg0EVAigCQzMsF0A3CHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&_nc_rid=1b58ace611&ccb=7-5&oh=00_AfBUCe44T7B5J6Mz1OwEKExomAE8pwPVvmBQ08mTTlIjAw&oe=639476D8&_nc_sid=78c662&dl=1" />
        </View>
      </Swiper>
      {children}
    </View>
  );
};
