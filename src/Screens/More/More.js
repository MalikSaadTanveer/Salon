import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../constants/navigationString';
import colors from '../../utils/colors';
import Entypo from 'react-native-vector-icons/Entypo'
const More = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <View style={styles.container}>
                <View style={styles.more}>
                    <Text style={styles.moreText}>Barbers</Text>
                </View>
                <View style={styles.btnContainer}>
                    <ButtonComp btnText={navigationString.Pricing} onPress={() => navigation.navigate(navigationString.Pricing)} />
                    <ButtonComp btnText={navigationString.MapLocations} onPress={() => navigation.navigate(navigationString.MapLocations)} />
                    <ButtonComp btnText={navigationString.WorkingHours} onPress={() => setShowModal(true)} />
                    <ButtonComp btnText={navigationString.ContactUs} onPress={() => navigation.navigate(navigationString.ContactUs)} />
                    <ButtonComp btnText={navigationString.PrivacyPolicy} onPress={() => navigation.navigate(navigationString.PrivacyPolicy)} />
                </View>
            </View>

            <Modal
                visible={showModal}
                transparent={true}
                animationType={'fade'}>

                <View style={styles.modalContainer} >

                    <View style={styles.modalInner}>
                        <Text style={styles.modalInnerText}>Our Hours</Text>
                        <Entypo name="cross" style={styles.modalCross}
                            onPress={() => setShowModal(false)}
                        />
                        <Text style={styles.textHeader}> Monday – Friday</Text>
                        <Text style={styles.text}> 09:00 AM - 05:00 PM </Text>
                        
                        <View style={styles.textContainer}>
                            <Text style={styles.textHeader}> Saturday</Text>
                            <Text style={styles.text} >09:00 AM – 04:00 PM </Text>
                            <Text style={styles.textHeader}> Saturday</Text>
                            <Text style={styles.text} >09:00 AM – 04:00 PM </Text>
                        </View>

                    </View>
                </View>

            </Modal>
        </>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    more: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
        width: '100%',
    },
    moreText: {
        color: colors.primary,
        fontSize: '40@s',
        fontWeight: 'bold'
    },
    btnContainer: {
        flex: 3,
        backgroundColor: colors.white,
        width: '100%',
        alignItems: 'center',
        paddingTop: '20@s',
        borderTopLeftRadius: '20@s',
        borderTopRightRadius: '20@s',
    },
    modalContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    modalInner: {
        backgroundColor: colors.black,
        width: '100%',
        height: '50%',
        alignItems: 'center',
        // borderRadius: '20@s',
        elevation: 4,
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center',
        position: 'relative',
    },
    modalInnerText: {
        position: 'absolute',
        top: "16@s",
        color: colors.white,
        fontSize: '30@s',
    },
    modalCross: {
        position: 'absolute',
        top: '10@s',
        right: '10@s',
        color: colors.primary,
        fontSize: '34@s'
    },
    textContainer: {
        alignItems: 'center',
        marginTop: '20@s'
    },
    textHeader: {
        fontSize: '18@s',
        color: colors.primary,
    },
    text: {
        fontSize: '18@s',
        color: colors.white,
    }
});

export default More;
