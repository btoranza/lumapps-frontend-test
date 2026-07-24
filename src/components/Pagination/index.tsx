import React from 'react';
import { Button, ButtonEmphasis, Theme } from '@lumx/react';
import { mdiChevronLeft, mdiChevronRight } from '@lumx/icons';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <Button
        theme={Theme.dark}
        emphasis={ButtonEmphasis.low}
        leftIcon={mdiChevronLeft}
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      />

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          theme={Theme.dark}
          emphasis={page === currentPage ? ButtonEmphasis.high : ButtonEmphasis.low}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Button>
      ))}

      <Button
        theme={Theme.dark}
        emphasis={ButtonEmphasis.low}
        rightIcon={mdiChevronRight}
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      />
    </nav>
  );
};
