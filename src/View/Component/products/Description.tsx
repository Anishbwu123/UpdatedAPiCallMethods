import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    LayoutAnimation,
    Platform,
    UIManager,
    ImageURISource, // Import ImageURISource for image source typing
} from 'react-native';
import { CustomImage } from '../CustomImage';

// Enable LayoutAnimation for Android


// Define the props type for the component
interface ExpandableDescriptionProps {
    title: string;
    content: string;
    // Optional: if you want to pass custom image URIs for icons\
    icon?: number
    
}

const Description: React.FC<ExpandableDescriptionProps> = ({
    title,
    content,
    icon
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Function to toggle the expanded state
    const toggleExpand = () => {
        // Configure the animation for a smooth transition
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    // Determine which icon to show based on the expanded state
 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header} activeOpacity={0.7}>
                <Text style={styles.headerText}>{title}</Text>
                {/* <Image
          source={iconSource}
          style={styles.dropdownIcon}
        /> */}
                <CustomImage height={20} width={20} source={icon} />
            </TouchableOpacity>

            {/* Content section that expands/collapses */}
            {isExpanded && (
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
            )}
        </View>
    );
};

// Main App component to showcase the ExpandableDescription
// const App: React.FC = () => {
//   const descriptionTitle = "Description:";
//   const descriptionContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   return (
//     <View style={styles.appContainer}>
//       <ExpandableDescription
//         title={descriptionTitle}
//         content={descriptionContent}
//       />
//       {/* You can add more ExpandableDescription components here */}
//       <ExpandableDescription
//         title="Another Section:"
//         content="This is some other content that can also be expanded or collapsed. It demonstrates reusability."
//       />
//        <ExpandableDescription
//         title="Custom Icons Example:"
//         content="This example uses different placeholder icons passed as props."
//         expandedIconUri="https://placehold.co/24x24/00E676/FFFFFF?text=OPEN"
//         collapsedIconUri="https://placehold.co/24x24/FF1744/FFFFFF?text=CLOSED"
//       />
//     </View>
//   );
// };

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 60 : 50, // Adjust padding for iOS status bar
        paddingHorizontal: 20,
        backgroundColor: '#f0f2f5', // Light background for the screen
    },
    container: {
        backgroundColor: '#F5F5F5', // White background for the card
        borderRadius: 20, // Rounded corners
        marginBottom: 15, // Space between multiple cards
        padding: 15,
        shadowColor: '#000', // Shadow for depth
    
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333', // Dark grey for the title
        flexShrink: 1, // Allow text to shrink if too long, preventing icon push
        marginRight: 8, // Add some space between text and icon
    },
    dropdownIcon: {
        width: 24,
        height: 24,
    },
    contentContainer: {
        paddingTop: 10, // Space between header and content when expanded
    },
    contentText: {
        fontSize: 16,
        color: '#555555', // Medium grey for the content
        lineHeight: 22, // For better readability
    },
});

export default Description; // Exporting App to run the example

// To use ExpandableDescription in your own TSX app:
// 1. Ensure you have TypeScript set up in your React Native project.
// 2. Import it: import ExpandableDescription from './ExpandableDescription'; (adjust path if needed)
// 3. Use it:
//    <ExpandableDescription
//      title="Your Title"
//      content="Your content here"
//    />
//    // Or with custom icons:
//    <ExpandableDescription
//      title="Custom Title"
//      content="More content"
//      expandedIconUri="your-expanded-icon-url"
//      collapsedIconUri="your-collapsed-icon-url"
//    />
