import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { textSize } from '../../Utils/textSize';
import { FontsVariant } from '../../Utils/fontsVariant';

type PositionInGroup = 'single' | 'first' | 'middle' | 'last';


type Props = {
    message: string;
    isMe: boolean;
    position: PositionInGroup;
};


export const ChatMessage: React.FC<Props> = ({ message, isMe, position }) => {

    const getBubbleStyle = () => {
        if (isMe) {
            switch (position) {
                case 'first':
                    return { borderTopRightRadius: 40, borderBottomRightRadius: 4 };
                case 'middle':
                    return { borderTopRightRadius: 4, borderBottomRightRadius: 4 };
                case 'last':
                    return { borderTopRightRadius: 4, borderBottomRightRadius: 40 };
                case 'single':
                      return { borderBottomRightRadius: 4 };
                default:
                    return { borderTopRightRadius: 40, borderBottomRightRadius: 40 };
            }
        } else {
            switch (position) {
                case 'first':
                    return { borderTopLeftRadius: 40, borderBottomLeftRadius: 4 };
                case 'middle':
                    return { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 };
                case 'last':
                    return { borderTopLeftRadius: 4, borderBottomLeftRadius: 40 };
                case 'single':
                  
                default:
                    return { borderBottomRightRadius: 4 };
            }
        }
    };


    return (
        <View
            style={[
                styles.messageContainer,
                isMe ? styles.rightAlign : styles.leftAlign,
            ]}
        >
            <View style={[styles.bubble, isMe ? styles.meBubble : styles.otherBubble, getBubbleStyle()]}>
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {

        // backgroundColor:"red",
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    leftAlign: {
        justifyContent: 'flex-start',
    },
    rightAlign: {
        justifyContent: 'flex-end',
    },
    bubble: {
        maxWidth: '75%',
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderRadius: 40,
    },
    meBubble: {
        backgroundColor: '#DAF6FF',
        borderBottomRightRadius: 4,
    },
    otherBubble: {
        backgroundColor: '#F1F1F1',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: textSize.small_4x,
        fontFamily: FontsVariant.PoppinsMedium,
        color: '#333',
    },
});
