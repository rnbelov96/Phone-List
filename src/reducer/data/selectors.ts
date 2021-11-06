import { createSelector } from 'reselect';
import { photosPerPage } from '../../const';
import { FullStateType } from '../../types/general-types';
import { getCurrentPage, getIdFilter } from '../app/selectors';

export const getPhotoList = (state: FullStateType) => state.data.photoList;

export const getPhotosToShow = createSelector(
  getPhotoList,
  getCurrentPage,
  getIdFilter,
  (photoList, page, idFilter) => {
    if (idFilter === 0) {
      return photoList.slice((page - 1) * photosPerPage, page * photosPerPage);
    }
    const filteredList = photoList.filter(el => el.albumId === idFilter);

    return filteredList.slice((page - 1) * photosPerPage, page * photosPerPage);
  },
);

export const getPageNumberList = createSelector(
  getCurrentPage,
  getPhotoList,
  getIdFilter,
  (currentPage, photoList, idFilter) => {
    let totalPages: number;

    if (idFilter !== 0) {
      const filteredList = photoList.filter(el => el.albumId === idFilter);
      totalPages = Math.ceil(filteredList.length / photosPerPage);
    } else {
      totalPages = Math.ceil(photoList.length / photosPerPage);
    }

    let pageList;

    if (currentPage <= 4 && totalPages >= 8) {
      pageList = [1, 2, 3, 4, 5, 6, 0, totalPages];
      return pageList;
    }

    if (currentPage > 4 && currentPage < totalPages - 3 && totalPages >= 8) {
      pageList = [
        1,
        0,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        0,
        totalPages,
      ];
      return pageList;
    }

    if (currentPage > 4 && currentPage >= totalPages - 3 && totalPages >= 8) {
      pageList = [
        1,
        0,
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
      return pageList;
    }

    pageList = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pageList.push(i);
    }

    return pageList;
  },
);

export const getAlbumIdList = createSelector(getPhotoList, photoList => {
  const idSetList = new Set<number>();

  photoList.forEach(photo => idSetList.add(photo.albumId));

  return [...idSetList];
});
