// @ts-nocheck
import {useRef} from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = useRef();

export function navigate(name: string, params?: Object) {
  navigationRef.current?.navigate(name, params);
}

export function navigatePush(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function navigateReplace(name) {
  navigationRef.current?.dispatch(StackActions.replace(name));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function current() {
  navigationRef.current.getCurrentRoute().name;
}

export function canGoBack() {
  return navigationRef?.current?.canGoBack();
}
