import React from "react"
import { View, Text } from "react-native"
import { Link } from "react-router-native"
import styles from "./HeaderStyles"
import SvgChevronLeft from "../common/svg/ChevronLeft"

type ParamsType = {
    title: string
    backBtnPath: string | null
}

const Header: React.FC<ParamsType> = ({title, backBtnPath}) => {
    return (
        <View style={styles.header}>
            {backBtnPath && <Link to={backBtnPath} underlayColor="white"><View style={styles.back}><SvgChevronLeft style={styles.back__svg} /></View></Link>}
            <Text style={[styles.title, backBtnPath && styles.title__back]}>{title}</Text>
        </View>
    )
}

export default Header