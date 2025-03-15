import TodoListManager from "@/components/TodoListManager";
import { Text, View } from "react-native";
import {SvgXml} from "react-native-svg";

export default function Index() {
    const homeIconXML = '<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 42.5807V23.2258H30V42.5807M6 17.4194L24 3.87097L42 17.4194V38.7097C42 39.7363 41.5786 40.7209 40.8284 41.4469C40.0783 42.1728 39.0609 42.5807 38 42.5807H10C8.93913 42.5807 7.92172 42.1728 7.17157 41.4469C6.42143 40.7209 6 39.7363 6 38.7097V17.4194Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    let fridgeIcon = '<svg width="62" height="59" viewBox="0 0 62.000000 59.000000" xmlns="http://www.w3.org/2000/svg"> \
    <g transform="translate(0.000000,59.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> \
    <path d="M45 528 c-3 -8 -4 -119 -3 -248 l3 -235 41 -3 c38 -3 42 0 48 23 6 25 10 26 64 23 50 -3 57 -6 60 -25 3 -20 9 -23 48 -23 l44 0 -2 248 -3 247 -148 3 c-114 2 -149 0 -152 -10z m265 -133 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z m0 -210 l0 -65 -115 0 -115 0 0 65 0 65 115 0 115 0 0 -65z"/> \
    <path d="M246 398 c1 -30 7 -44 18 -46 13 -3 16 6 16 42 0 38 -3 46 -18 46 -15 0 -18 -7 -16 -42z"/> \
    <path d="M243 185 c0 -18 5 -25 18 -25 14 0 19 7 19 25 0 18 -5 25 -19 25 -13 0 -18 -7 -18 -25z"/> \
    <path d="M390 525 c0 -10 10 -15 31 -15 17 0 39 -5 51 -11 23 -12 52 -75 42 -91 -6 -10 12 -28 29 -28 13 0 7 70 -8 100 -19 36 -62 60 -110 60 -24 0 -35 -4 -35 -15z"/> \
    <path d="M390 461 c0 -14 8 -21 28 -23 21 -2 28 -9 30 -30 2 -16 9 -28 18 -28 9 0 14 10 14 28 0 33 -8 45 -37 61 -32 17 -53 14 -53 -8z"/> \
    <path d="M384 409 c-10 -16 18 -40 35 -30 12 8 12 12 -2 25 -18 19 -24 20 -33 5z"/> \
    </g> \
    </svg>';
    fridgeIcon = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="62.000000pt" height="59.000000pt" viewBox="0 0 62.000000 59.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,59.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M45 528 c-3 -8 -4 -119 -3 -248 l3 -235 41 -3 c38 -3 42 0 48 23 6 25 10 26 64 23 50 -3 57 -6 60 -25 3 -20 9 -23 48 -23 l44 0 -2 248 -3 247 -148 3 c-114 2 -149 0 -152 -10z m265 -133 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z m0 -210 l0 -65 -115 0 -115 0 0 65 0 65 115 0 115 0 0 -65z"/> <path d="M246 398 c1 -30 7 -44 18 -46 13 -3 16 6 16 42 0 38 -3 46 -18 46 -15 0 -18 -7 -16 -42z"/> <path d="M243 185 c0 -18 5 -25 18 -25 14 0 19 7 19 25 0 18 -5 25 -19 25 -13 0 -18 -7 -18 -25z"/> <path d="M390 525 c0 -10 10 -15 31 -15 17 0 39 -5 51 -11 23 -12 52 -75 42 -91 -6 -10 12 -28 29 -28 13 0 7 70 -8 100 -19 36 -62 60 -110 60 -24 0 -35 -4 -35 -15z"/> <path d="M390 461 c0 -14 8 -21 28 -23 21 -2 28 -9 30 -30 2 -16 9 -28 18 -28 9 0 14 10 14 28 0 33 -8 45 -37 61 -32 17 -53 14 -53 -8z"/> <path d="M384 409 c-10 -16 18 -40 35 -30 12 8 12 12 -2 25 -18 19 -24 20 -33 5z"/> </g> </svg>';
    fridgeIcon = '<svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_357_1660" fill="white"><rect y="1" width="30" height="45" rx="2"/></mask><rect y="1" width="30" height="45" rx="2" stroke="black" stroke-width="8" mask="url(#path-1-inside-1_357_1660)"/><line x1="28" y1="29" x2="1" y2="29" stroke="black" stroke-width="4"/><line x1="21.5" y1="34" x2="21.5" y2="39" stroke="black" stroke-width="3"/><line x1="33.0424" y1="11.9213" x2="35.9188" y2="14.701" stroke="black" stroke-width="3"/><path d="M34 8.53794C34.8333 8.03794 37 7.43794 39 9.03794C41 10.6379 40.5 13.0379 40 14.0379" stroke="black" stroke-width="3"/><line x1="21.5" y1="12" x2="21.5" y2="20" stroke="black" stroke-width="3"/><path d="M1.5 49.5V44.5H8.8355L6.9605 49.5H1.5Z" stroke="black" stroke-width="3"/><path d="M28.5 49.5V44.5H21.1645L23.0395 49.5H28.5Z" stroke="black" stroke-width="3"/><path d="M34 2.28631C35.6667 1.78631 39.9 1.58631 43.5 4.78631C47.1 7.98631 46.6667 12.453 46 14.2863" stroke="black" stroke-width="3"/></svg>';
    return (
        <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <SvgXml xml={homeIconXML} width={100} height={100}/>
        <SvgXml xml={fridgeIcon} width={100} height={100}/>
        </View>
    );
}