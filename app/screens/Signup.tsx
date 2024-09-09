import * as React from 'react';
import {Text, Alert, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';

const Signup = () => {
  const clinet_id = `client_id=${process.env.REACT_APP_GOOGLE_OAUTH_CLINET_ID}&`;
  const [userInfo, setUserInfo] = useState(null);

  GoogleSignin.configure({
    webClientId: clinet_id, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  // const isSuccessResponse = (response: any): boolean => {
  //   return response && response.data;
  // };

  // const isErrorWithCode = (error: any): boolean => {
  //   return error && error.code;
  // };

  const loginWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response: any = await GoogleSignin.signIn();
      if (response) {
        setUserInfo(response.data);
        Alert.alert(response.data);
      } else {
        Alert.alert('로그인 취소', '사용자가 로그인을 취소했습니다.');
      }
    } catch (error: any) {
      if (error) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            Alert.alert('로그인 진행 중', '로그인이 이미 진행 중입니다.');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Alert.alert(
              '플레이 서비스 오류',
              '플레이 서비스가 사용 불가능하거나 업데이트가 필요합니다.',
            );
            break;
          default:
            Alert.alert('로그인 오류', '알 수 없는 오류가 발생했습니다.');
        }
      } else {
        Alert.alert('오류', '구글 로그인과 관련 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container
      colors={['#022a2d', '#021011', '#000000']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.35}}>
      <Icon name="g-translate" color="#00aced" />
      <StyledImage source={require('../asset/images/Logo.png')} />
      <SubTitle>시원하게 넘기는 선 넘는 숏 드라마, 비글루</SubTitle>
      <SocialLoginButton onPress={loginWithGoogle}>
        <LogoImage source={require('../asset/images/Google-Logo.jpg')} />
        <ButtonText>Google로 계속하기</ButtonText>
      </SocialLoginButton>
      <SocialLoginButton onPress={loginWithGoogle}>
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
