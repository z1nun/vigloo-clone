import * as React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import styled, {css} from '@emotion/native';

const Signup = () => {
  return (
    <Container>
      <StyledImage source={require('../asset/images/Logo.png')} />
      <SubTitle>시원하게 넘기는 선 넘는 숏 드라마, 비글루</SubTitle>
      <SocialLoginButton>
        <ButtonText>Google로 계속하기</ButtonText>
      </SocialLoginButton>
      <SocialLoginButton>
        <ButtonText>Apple로 계속하기</ButtonText>
      </SocialLoginButton>
    </Container>
  );
};

const Container = styled.View`
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 57%,
    rgba(17, 115, 121, 1) 100%
  );
`;

const StyledImage = styled.Image`
  size: 20px;
  margin: 12px;
`;

const SubTitle = styled.Text``;

const SocialLoginButton = styled(TouchableOpacity)`
  background-color: #fff;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
`;

export default Signup;
