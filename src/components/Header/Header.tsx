import React from "react"
import { View, Text } from "react-native"
import { Link } from "react-router-native"
import styles from "./HeaderStyles"

type ParamsType = {
    title: string
    backBtnPath: string | null
}

const Header: React.FC<ParamsType> = ({title, backBtnPath}) => {
    return (
        <View style={styles.header}>
            {backBtnPath && <Link to={backBtnPath}><Text style={styles.back}>{'<'}</Text></Link>}
            <Text style={[styles.title, backBtnPath && styles.title__back]}>{title}</Text>
        </View>
    )
}

export default Header