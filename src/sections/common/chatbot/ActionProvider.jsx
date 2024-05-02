import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('나도 반가워요');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleHelp = (topic) => {
        const botMessages = [
            createChatBotMessage(`"${topic}"에 대해 안내해드리겠습니다.`),
            // 이어지는 답변들을 추가합니다.
        ];

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, ...botMessages],
        }));
    };

    // 1-1. 로그인은 어떻게 하나요?
    const handleLogin = () => {
        const botMessage = createChatBotMessage('로그인을 하시기 위해선 상단의 로그인버튼을 눌러주세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 1-2. 회원가입은 어떻게 하나요?
    const handleRegister = () => {
        const botMessage = createChatBotMessage('회원가입을 하시려면 회원가입 페이지로 이동하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 1-3. 회원탈퇴는 어떻게 하나요?
    const handleDeleteAccount = () => {
        const botMessage = createChatBotMessage('회원탈퇴를 하시려면 마이페이지에서 회원탈퇴를 선택하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 2-1. 게시글 쓰는 방법은 무엇인가요?
    const handleBoardWrite = () => {
        const botMessage = createChatBotMessage('게시글을 작성하려면 게시글 작성 페이지로 이동하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 2-2. 게시글 수정은 어떻게 하나요?
    const handleBoardUpdate = () => {
        const botMessage = createChatBotMessage('게시글을 수정하려면 해당 게시글을 열고 수정하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 2-3. 게시글 삭제는 어떻게 하나요?
    const handleBoardDelete = () => {
        const botMessage = createChatBotMessage('게시글을 삭제하려면 해당 게시글을 열고 삭제하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 2-4. 게시글을 친구에게 보내고 싶어요.
    const handleBoardShare = () => {
        const botMessage = createChatBotMessage('게시글을 공유하려면 해당 게시글을 선택하고 공유 버튼을 누르세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 2-5. 게시글 좋아요를 모아서 볼 수 있나요?
    const handleBoardLike = () => {
        const botMessage = createChatBotMessage('게시글을 좋아요한 목록은 마이페이지에서 확인할 수 있습니다.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 3-1. 개인정보 수정은 어디서 할 수 있나요?
    const handleProfileUpdate = () => {
        const botMessage = createChatBotMessage('개인정보를 수정하려면 마이페이지로 이동하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 3-2. 프로필사진을 바꾸고 싶어요.
    const handleProfileImageUpdate = () => {
        const botMessage = createChatBotMessage('프로필 사진을 변경하려면 마이페이지에서 프로필 사진을 업로드하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 3-3. 비밀번호는 어디서 변경할 수 있나요?
    const handleProfilePasswordChange = () => {
        const botMessage = createChatBotMessage('비밀번호를 변경하려면 마이페이지에서 비밀번호 변경을 선택하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 3-4. 도메인 주소는 무엇인가요?
    const handleProfileDomain = () => {
        const botMessage = createChatBotMessage('도메인 주소는 사용자의 고유한 웹 사이트 주소입니다.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 3-5. 계정을 비활성화 하고 싶어요.
    const handleProfileAccountDisable = () => {
        const botMessage = createChatBotMessage('계정을 비활성화하려면 마이페이지에서 비활성화를 선택하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 4-1. 친구와 채팅을 하고 싶어요.
    const handleChatting = () => {
        const botMessage = createChatBotMessage('친구와 채팅을 하려면 채팅 창에서 친구를 선택하세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 4-2. 이 친구와 더 이상 채팅을 하고 싶지 않아요.
    const handleChattingStop = () => {
        const botMessage = createChatBotMessage('이 친구와 채팅을 중단하려면 차단 버튼을 눌러주세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 4-3. 다시는 이 친구에게 메시지를 받고 싶지 않아요.
    const handleChattingBlock = () => {
        const botMessage = createChatBotMessage('이 친구로부터 메시지를 차단하려면 차단 버튼을 눌러주세요.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // 5-1. 사용 중 문제가 생기셨거나 해결되지 않아 도움이 필요하시다면
    const handleAdminHelp = () => {
        const botMessage = createChatBotMessage('사용 중 문제가 생기셨거나 해결되지 않아 도움이 필요하시다면 flownary_admin@gmail.com으로 메일을 보내주세요. 신속히 답변드리도록 하겠습니다.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleHello, handleHelp, handleLogin, handleRegister, handleDeleteAccount, handleBoardWrite, handleBoardUpdate, handleBoardDelete, handleBoardShare, handleBoardLike, handleProfileUpdate, handleProfileImageUpdate, handleProfilePasswordChange, handleProfileDomain, handleProfileAccountDisable, handleChatting, handleChattingStop, handleChattingBlock, handleAdminHelp },
                });
            })}
        </div>
    );
};

export default ActionProvider;
