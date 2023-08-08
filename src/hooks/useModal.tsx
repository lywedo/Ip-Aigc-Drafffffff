

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const visible = () => setModalVisible(true);
  const hidden = () => setModalVisible(false);

  
  return {
    modalVisible,
    visible,
    hidden,
  }
}

export default useModal
