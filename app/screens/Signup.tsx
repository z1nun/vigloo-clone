import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  return (
    <Container
      colors={['#022a2d', '#021011', '#000000']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.35}}>
      <StyledImage source={require('../asset/images/Logo.png')} />
      <SubTitle>시원하게 넘기는 선 넘는 숏 드라마, 비글루</SubTitle>
      <SocialLoginButton>
        <LogoImage source={require('../asset/images/Google-Logo.jpg')} />
        <ButtonText>Google로 계속하기</ButtonText>
      </SocialLoginButton>
      <SocialLoginButton>
        <LogoImage source={require('../asset/images/Apple-Logo.jpg')} />
        <ButtonText>
          <Text> Apple로 계속하기</Text>
        </ButtonText>
      </SocialLoginButton>
    </Container>
  );
};

const Container = styled(LinearGradient)`
  padding-top: 50px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledImage = styled.Image`
  width: 200px;
  margin: 150px 0 10px;
  object-fit: contain;
`;

const SubTitle = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 240px;
`;

const SocialLoginButton = styled(TouchableOpacity)`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
`;

const LogoImage = styled.Image`
  position: absolute;
  left: 10px;
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;

export default Signup;
