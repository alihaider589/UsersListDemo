import {StyleSheet} from 'react-native';
import {AppColors} from '../Constants/Colors';

export default StyleSheet.create({
  userItemContainer: {},
  userContainer: {
    backgroundColor: AppColors.blue,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whiteText: {
    color: AppColors.white,
    fontWeight:"400",
    
  },
  actionButton: {
    borderWidth: 1,
    borderColor: AppColors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    backgroundColor:AppColors.black,
    borderRadius: 5,
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
});
