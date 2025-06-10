import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ChatBoxProps {
    avatarSource?: string; // Can be a remote URI or a local require
    userName: string;
    lastMessage: string;
    messageTime: string;
    unreadCount: number;
    onPress?: () => void; // Optional onPress handler
}

const ChatBox: React.FC<ChatBoxProps> = ({
    avatarSource,
    userName,
    lastMessage,
    messageTime,
    unreadCount,
    onPress = () => {}, // Default to a no-op function if not provided
}) => {
    // Determine if avatarSource is a remote URI or a local asset path
    const imageSource = typeof avatarSource === 'string' && avatarSource.startsWith('http')
        ? { uri: avatarSource }
        : avatarSource || require('../../Assets/Images/avatar/female.png'); // Default local image

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* Avatar */}
            <Image
                source={imageSource}
                style={styles.avatar}
            />

            {/* Message Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode="tail">
                    {lastMessage}
                </Text>
            </View>

            {/* Time and Badge */}
            <View style={styles.rightSection}>
                <Text style={styles.messageTime}>{messageTime}</Text>
                {unreadCount > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadCountText}>{unreadCount}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',   
        paddingVertical: 20,     
        paddingHorizontal: 15,   
        backgroundColor: '#fff',
        // padding:30,
    },
    avatar: {
        width: 50,              
        height: 50,          
        borderRadius: 25,       
        marginRight: 12,         
    },
    contentContainer: {
        flex: 1,                 
        justifyContent: 'center',
    },
    userName: {
        fontSize: 17,            
        fontWeight: 'bold',
        color: '#000000',        
    },
    lastMessage: {
        fontSize: 14,
        color: '#8A8A8E',         
        marginTop: 2,             
    },
    rightSection: {
        alignItems: 'flex-end',  
        paddingLeft: 10,         
        justifyContent: 'flex-start', 
    },
    messageTime: {
        fontSize: 13,            
        color: '#333333',        
        marginBottom: 5,        
    },
    unreadBadge: {
        backgroundColor: '#00C4FF', 
        width: 22,                
        height: 22,               
        borderRadius: 11,         
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    unreadCountText: {
        color: '#fff',           
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ChatBox;