// `ProgressBar` є компонентом, який відображає прогрес завантаження у вигляді анімації
import { ProgressBar } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    // Container  - представляє зовнішній контейнер для компонента `Loader`.
    <Container>
      {/* Властивості, які передаються компоненту `ProgressBar` */}
      <ProgressBar
        height="180"
        width="180"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#f6fa1e"
        barColor="#3a28fc"
      />
    </Container>
  );
};

export default Loader;
