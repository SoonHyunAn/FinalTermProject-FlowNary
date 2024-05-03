
import React, { useState } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [activeGroup, setActiveGroup] = useState(null); // 현재 활성화된 기능 그룹 상태
    const [featureButtons, setFeatureButtons] = useState([]);

    // 챗봇 채팅 관련 함수
    function handleTalkChatbot() {
        const botMessage = createChatBotMessage('저랑 대화하실려구요? 반가워요! ^^')
        setState(({
            messages: [botMessage]
        }));

    }
    
    const handleHello = () => {
        const botMessage = createChatBotMessage('네! 저도 인사가 참 좋아요!');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleUnknownMessage = () => {
        const botMessage = createChatBotMessage('죄송합니다ㅠㅠ 무슨 말씀인지 모르겠습니다.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };


    // 게시글 관련 함수들
    function handleCreatePost() {
        const botMessage = createChatBotMessage('게시글 작성 방법에 대해 안내합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleEditPost() {
        const botMessage = createChatBotMessage('게시글 수정 방법을 설명드립니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleDeletePost() {
        const botMessage = createChatBotMessage('게시글 삭제 방법을 안내합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleSharePost() {
        const botMessage = createChatBotMessage('게시글 공유하는 방법을 설명합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleLikePost() {
        const botMessage = createChatBotMessage('게시글에 좋아요를 누르는 방법입니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }


    // 유저 관련 함수들
    function handleEditUserInfo() {
        const botMessage = createChatBotMessage('개인정보 수정 방법을 안내합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleChangeProfilePicture() {
        const botMessage = createChatBotMessage('프로필 사진 변경 방법을 설명합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleChangePassword() {
        const botMessage = createChatBotMessage('비밀번호 변경 방법을 안내합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleDomainInfo() {
        const botMessage = createChatBotMessage('도메인 정보에 대해 설명드립니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleDeactivateAccount() {
        const botMessage = createChatBotMessage('계정 비활성화 방법을 안내합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }


    // 채팅 관련 함수들
    function handleStartChat() {
        const botMessage = createChatBotMessage('친구와 채팅을 시작하는 방법입니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleStopChat() {
        const botMessage = createChatBotMessage('채팅을 중지하는 방법을 설명합니다.');
        setState(prev => ({ ...prev, messages: [...prev.messages, botMessage] }));
    }

    function handleBlockUser() {
        const botMessage = createChatBotMessage('사용자를 차단하는 방법을 안내합니다.');
        setState(prev => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }));
    }

    const setGroup = (group) => {
        setActiveGroup(group);
        setFeatureButtons(features[group]);
        const botMessage = createChatBotMessage(`${group}을 선택하셨습니다. 무엇이 궁금하신가요?`);
        setState(({
            messages: [botMessage]
        }));
    };

    const features = {
        chatbot: [
            { name: "챗봇과 대화시작.", handler: handleTalkChatbot },
        ],

        posting: [
            { name: "게시글 작성 방법", handler: handleCreatePost },
            { name: "게시글 수정 방법", handler: handleEditPost },
            { name: "게시글 삭제 방법", handler: handleDeletePost },
            { name: "게시글 공유 방법", handler: handleSharePost },
            { name: "게시글 좋아요 방법", handler: handleLikePost }
        ],
        user: [
            { name: "개인정보 수정 방법", handler: handleEditUserInfo },
            { name: "프로필 사진 변경 방법", handler: handleChangeProfilePicture },
            { name: "비밀번호 변경 방법", handler: handleChangePassword },
            { name: "도메인 정보 확인 방법", handler: handleDomainInfo },
            { name: "계정 비활성화 방법", handler: handleDeactivateAccount }
        ],
        chatting: [
            { name: "채팅 시작 방법", handler: handleStartChat },
            { name: "채팅 중지 방법", handler: handleStopChat },
            { name: "사용자 차단 방법", handler: handleBlockUser }
        ]
    };

    return (
        <div>
            <button className="help-btn" onClick={() => setGroup('chatbot')}>챗봇과 대화하기</button>
            <button className="help-btn" onClick={() => setGroup('posting')}>게시글 관련 문의</button>
            <button className="help-btn" onClick={() => setGroup('user')}>유저 관련 문의</button>
            <button className="help-btn" onClick={() => setGroup('chatting')}>채팅 관련 문의</button>

            {featureButtons.map(feature => (
                <button className='board-btn' key={feature.name} onClick={feature.handler}>{feature.name}</button>
            ))}

            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    actions: {
                        // 챗봇과 대화 
                        handleTalkChatbot, handleHello, handleUnknownMessage,

                        // 포스팅 문의
                        handleCreatePost, handleEditPost, handleDeletePost, handleSharePost, handleLikePost,

                        // 유저문의
                        handleEditUserInfo, handleChangeProfilePicture, handleChangePassword, handleDomainInfo,
                        handleDeactivateAccount,

                        // 채팅문의
                        handleStartChat, handleStopChat, handleBlockUser
                    }
                });
            })}
        </div>
    );
};

export default ActionProvider;
