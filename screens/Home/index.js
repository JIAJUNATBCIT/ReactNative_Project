import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Header } from '../../components';
import { Audio } from 'expo-av';
import styles from './styles';
import { retrieveData } from '../../utilities';

export default class Home extends Component {

  state = {
    isSoundOn: true,
    highScore: 0,
  };

  async componentWillMount() {
    this.backgroundMusic = new Audio.Sound();
    this.buttonFX = new Audio.Sound();
    retrieveData('highScore').then(val => this.setState({ highScore: val || 0 }));
    try {
      await this.backgroundMusic.loadAsync(
        require('../../assets/music/Komiku_Mushrooms.mp3'),
      );
      await this.buttonFX.loadAsync(require('../../assets/sfx/button.wav'));
      await this.backgroundMusic.setIsLoopingAsync(true);
      await this.backgroundMusic.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  onPlayPress = () => {
    this.buttonFX.playAsync();
    this.backgroundMusic.stopAsync();
    this.props.navigation.navigate('Game');
  };

  onLeaderboardPress = () => {
    console.log('onLeaderboardPress event handler');
  };

  onToggleSound = () => {
    this.setState({ isSoundOn: !this.state.isSoundOn });
    if(this.state.isSoundOn) {
      this.backgroundMusic.stopAsync()
    } else {
      this.backgroundMusic.playAsync()
    }
  };

  render() {
    const imageSource = this.state.isSoundOn
    ? require("../../assets/icons/speaker-on.png")
    : require("../../assets/icons/speaker-off.png");
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={{ flex: 1 }} />
          <Header/>
          <TouchableOpacity 
            onPress={this.onPlayPress} 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              marginTop: 80,
            }}>
            <Image
              source={require("../../assets/icons/play_arrow.png")}
              style={styles.playIcon}
            />
            <Text style={styles.play}>PLAY!</Text>
          </TouchableOpacity>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            marginTop: 20,
          }}>
            <Image
              source={require("../../assets/icons/trophy.png")}
              style={styles.trophyIcon}
            />
            <Text style={styles.hiscore}>
              Hi-score: 
              {' '}
              {this.state.highScore}
            </Text>
          </View>
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
            marginTop: 20,
          }}>
            <Image
              source={require("../../assets/icons/flower.gif")}
              style={styles.playIcon}
            />
          </View>
          <TouchableOpacity
            onPress={this.onLeaderboardPress}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 60,
            }}>
            <Image
              source={require('../../assets/icons/leaderboard.png')}
              style={styles.leaderboardIcon}
            />
            <Text style={styles.leaderboard}>Leaderboard</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <View style={styles.bottomContainer}>
            <View>
              <Text style={[styles.copyrightText, { color: '#E64C3C' }]}>
                Music: Komiku
              </Text>
              <Text style={[styles.copyrightText, { color: '#F1C431' }]}>
                SFX: SubspaceAudio
              </Text>
              <Text style={[styles.copyrightText, { color: '#3998DB' }]}>
                @Copyright Things
              </Text>
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={this.onToggleSound}>
              <Image source={imageSource} style={styles.soundIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}