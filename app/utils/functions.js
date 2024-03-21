function createMessage(displayName, imageUrl) {
    const cardHeader = {
        title: `Olá, ${displayName}!`,
    };
    
    const avatarImageWidget = {
        image: { imageUrl },
    };

    const avatarSection = {
        widgets: [
            avatarImageWidget,
        ],
    };

    return {
        text: 'Olá, obrigado por me adicionar. A partir de agora vou te auxiliar durante a abertura e visualização de Tickets. Basta me enviar uma mensagem!',
        cardsV2: [{
            cardId: 'avatarCard',
            card: {
                name: 'Avatar Card',
                header: cardHeader,
                sections: [avatarSection],
            }
        }],
    };
}

module.exports = { createMessage };