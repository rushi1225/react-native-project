import { Link } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {
        if (!email || !password) {
            console.warn('Please fill all the fields');
            Alert.alert('Error', 'Please fill all the fields');
            return;
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <Image
                    source={require('./../../assets/images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Welcome Back</Text>

                <View style={styles.input}>
                    <Input placeholder={'Email'} onChangeText={setEmail} />
                    <Input
                        placeholder={'Password'}
                        password={true}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.signInBtn}>
                    <Button title="Sign In" onPress={onSignIn} />
                    <Text style={styles.noAcc}>Don't have an account?</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 40 }}>
                    <Link href="/auth/SignUp">
                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 16 }}>
                            Create New Account
                        </Text>
                    </Link>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 100,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: 5,
    },
    input: {
        marginTop: 20,
        width: '100%',
    },
    signInBtn: {
        marginTop: 20,
        width: '100%',
    },
    noAcc: {
        alignSelf: 'center',
        marginTop: 20,
    },
});