package com.example.AgriTechLogin.Security;

import com.example.AgriTechLogin.model.User;
import com.example.AgriTechLogin.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OAuth2UserServiceImpl extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String email = oAuth2User.getAttribute("email");

        userRepository.findByEmail(email).orElseGet(() -> {
            User newUser = User.builder()
                    .name(oAuth2User.getAttribute("name"))
                    .email(email)
                    .provider(userRequest.getClientRegistration().getRegistrationId()) // google/microsoft
                    .build();
            userRepository.save(newUser);
            return newUser;
        });

        return new CustomOAuth2User(oAuth2User);
    }
}
