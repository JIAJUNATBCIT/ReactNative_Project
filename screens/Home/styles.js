import { StyleSheet } from "react-native";
import { scale, isIphoneX } from '../../utilities';

export default StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#0a0a0a",
   justifyContent: "center",
   alignItems: "center"
 },
 play: {
    fontSize: 45,
    fontFamily: "dogbyte",
    color: "#ecf0f1",
    marginTop: 5
  },
  playIcon: {
    height: 60,
    width: 60,
    marginRight: 15
  },
  hiscore: {
    fontSize: 28.5,
    fontFamily: "dogbyte",
    color: "#ecf0f1",
    marginTop: 5
  },
  trophyIcon: {
    height: 45,
    width: 45,
    marginRight: 12.5
  },
  leaderboard: {
    fontSize: scale(38),
    fontFamily: 'dogbyte',
    color: '#ecf0f1',
    marginTop: 5,
  },
  leaderboardIcon: {
    height: scale(50),
    width: scale(50),
    marginRight: 15,
  },
  bottomContainer: {
    marginBottom: isIphoneX() ? 0 : '5%',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  copyrightText: {
    fontSize: 16,
    fontFamily: "dogbyte",
    marginBottom: 2.5
  },
  soundIcon: {
    height: scale(35),
    width: scale(35),
  },
});