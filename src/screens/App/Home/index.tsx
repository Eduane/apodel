import { View, Text } from "react-native";
import React from "react";
import Header from "./HomeComponents/Header";
import CustomSlider from "./HomeComponents/Slider";
import { Colors } from "../../../constants/colors";
import Content from "./HomeComponents/Content";
// import { ENDPOINTS } from "../../../constants/paths";
// import useGetRequest from "../../../hooks/reactQuery/useGetRequest";
// import { usePostMutation } from '../../../hooks/reactQuery/useMutation';

const HomeScreen = () => {
  // const payload = {
  //   paylod: "example",
  // };

  // Example for get request

  // const { data, error } = useGetRequest(ENDPOINTS.EXAMPLE);
  // console.log("data", data?.data);
  //Example for mutations
  //Same with put and delete
  // const postMutation = usePostMutation<unknown>(ENDPOINTS.EXAMPLE,
  //   //On Success
  //   (data:unknown)=>{console.log("Posted !! Success",data)},
  //   //On Error
  //   (error:unknown)=>{console.log('Posted !! Error',error)}
  // );
  // postMutation.mutate(payload); use on your function

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <Header />
      <CustomSlider />
      <Content />
    </View>
  );
};

export default HomeScreen;
