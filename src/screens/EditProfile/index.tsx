import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function EditProfile() {
  return (
    <Container>
      <View style={styles.header}>
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="chevron-left" size={24} color={colors['green--400']} />
          <Text style={styles.headerTitle}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>RR</Text>
        </View>
        <Text style={styles.userName}>Rodrigo Remor</Text>
      </View>

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>DADOS PESSOAIS</Text>
        
        <Input 
          labelText="Nome completo" 
          placeholder="Rodrigo Remor" 
          iconName="person" 
        />
        <Input 
          labelText="E-mail" 
          placeholder="rodrigo@gmail.com" 
          iconName="mail" 
          keyboardType="email-address"
        />
        <Input 
          labelText="Telefone" 
          placeholder="(11) 99999-9999" 
          iconName="phone" 
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.formSection}>
        <Text style={styles.sectionTitle}>ALTERAR SENHA</Text>
        
        <Input 
          labelText="Nova senha" 
          placeholder="••••••••" 
          iconName="lock" 
          secureTextEntry 
        />
        <Input 
          labelText="Confirmar nova senha" 
          placeholder="••••••••" 
          iconName="lock" 
          secureTextEntry 
        />
      </View>

      <View style={styles.footer}>
        <Button title="Salvar alterações" />
        
        <TouchableOpacity style={styles.dangerOutlineButton} activeOpacity={0.8}>
          <MaterialIcons name="delete-outline" size={20} color={colors['red--400']} />
          <Text style={styles.dangerOutlineText}>Excluir conta</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}