// Core
import React from 'react';
import { createPortal } from 'react-dom';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Styles
import {
  ModalWrapper,
  ModalCard,
  CloseButton,
  ModalBackground,
  DesctiptionSubTitle,
  DesctiptionSection,
  DescriptionTitle,
  MovieTitle,
  Circle,
  MovieGenres,
  DescriptionWrapper,
  LoadingError,
} from './styles';
// Helpers
import formatCash from '../../../helpers/formatCash';

const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal');
  return createPortal(children, modalRoot);
};

const MovieDetailsModal = React.memo(
  ({ movieGenres, details, loading, error, toggleModal, isModalOpen }) => {
    return (
      <Portal>
        {isModalOpen && !loading && (
          <ModalWrapper>
            <ModalCard backgroundImage={`${details.backdrop_path}`} error={error}>
              <CloseButton onClick={() => toggleModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
              {error ? (
                <LoadingError> Failed to load =(</LoadingError>
              ) : (
                <DescriptionWrapper>
                  <MovieTitle>
                    {`${details.title}`}
                    {details.vote_average !== 0 && (
                      <Circle>{details.vote_average}</Circle>
                    )}
                    <Circle>{details.release_date.slice(0, 4)}</Circle>
                  </MovieTitle>

                  <DescriptionTitle margin="2px 0 0 0" opacity="0.75">
                    {details.tagline}
                  </DescriptionTitle>

                  {movieGenres.length >= 1 && (
                    <DesctiptionSection>
                      <DescriptionTitle>Genres </DescriptionTitle>{' '}
                      <MovieGenres>{movieGenres.join(' • ')}</MovieGenres>
                    </DesctiptionSection>
                  )}
                  {details.budget !== 0 && details.revenue !== 0 && (
                    <DesctiptionSection>
                      <DescriptionTitle>Budget / Worldwide Gross</DescriptionTitle>
                      <DesctiptionSubTitle>
                        {`${formatCash(details.budget)} /
                  ${formatCash(details.revenue)}`}
                      </DesctiptionSubTitle>
                    </DesctiptionSection>
                  )}

                  {details.production_companies.length >= 1 && (
                    <DesctiptionSection>
                      <DescriptionTitle>Producion companies</DescriptionTitle>
                      <DesctiptionSubTitle>
                        {' '}
                        {details.production_companies
                          .map(company => company.name)
                          .join(' • ')}{' '}
                      </DesctiptionSubTitle>
                    </DesctiptionSection>
                  )}
                  {details.production_countries.length >= 1 && (
                    <DesctiptionSection>
                      <DescriptionTitle>Contry</DescriptionTitle>
                      <DesctiptionSubTitle>
                        {details.production_countries
                          .map(contry => contry.name)
                          .join(' • ')}{' '}
                      </DesctiptionSubTitle>
                    </DesctiptionSection>
                  )}
                  {details.overview && (
                    <DesctiptionSection>
                      <DescriptionTitle>Overview</DescriptionTitle>
                      <DesctiptionSubTitle>{details.overview}</DesctiptionSubTitle>
                    </DesctiptionSection>
                  )}
                </DescriptionWrapper>
              )}
            </ModalCard>
            <ModalBackground onClick={() => toggleModal(false)} />
          </ModalWrapper>
        )}
      </Portal>
    );
  },
);

export default MovieDetailsModal;
