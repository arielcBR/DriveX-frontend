import { sizes } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { ComponentProps, memo, useCallback, useState } from "react";
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type MaterialIconName = ComponentProps<typeof MaterialIcons>["name"];

const OptionItem = memo(({ item, onPress }: { item: string; onPress: (val: string) => void }) => (
  <TouchableOpacity 
    style={styles.optionItem}
    onPress={() => onPress(item)}
  >
    <Text style={styles.optionText}>{item}</Text>
  </TouchableOpacity>
));

interface Props {
  labelText: string;
  iconName?: MaterialIconName;
  placeholder?: string;
  value?: string;
  options: string[];
  onSelect: (value: string) => void;
  disabled?: boolean;
}

export function Select({ labelText, iconName, placeholder, value, options, onSelect, disabled }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleOpen = () => {
    if (!disabled) {
      setSearchText("");
      setModalVisible(true);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSelectOption = useCallback((item: string) => {
    onSelect(item);
    setModalVisible(false);
  }, [onSelect]);

  const renderItem = useCallback(({ item }: { item: string }) => (
    <OptionItem item={item} onPress={handleSelectOption} />
  ), [handleSelectOption]);

  return (
    <View style={styles.content}>
      <Text style={styles.label}>{labelText}</Text>
      
      <TouchableOpacity 
        style={[styles.inputWrapper, disabled && styles.disabled]} 
        onPress={handleOpen}
        activeOpacity={0.8}
      >
        {iconName && 
          <MaterialIcons 
            style={styles.icon} 
            size={sizes.icon_small} 
            name={iconName}
          />
        }

        <Text style={[styles.input, !value && styles.placeholder]}>
          {value || placeholder || "Selecione"}
        </Text>
        
        <MaterialIcons 
            style={styles.chevron} 
            size={sizes.icon_small} 
            name="arrow-drop-down"
        />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleClose}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={handleClose}
        >
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione: {labelText}</Text>
            
            <TextInput 
              style={styles.searchInput}
              placeholder="Pesquisar..."
              placeholderTextColor="#5A7FA0"
              value={searchText}
              onChangeText={setSearchText}
              autoCorrect={false}
            />

            <FlatList 
              data={filteredOptions}
              keyExtractor={(item) => item}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma opção encontrada</Text>}
              keyboardShouldPersistTaps="handled"
              initialNumToRender={15}
              maxToRenderPerBatch={10}
              windowSize={5}
              removeClippedSubviews={true}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
