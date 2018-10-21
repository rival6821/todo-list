import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//페이지 템플릿을 위한 컴포넌트
//틀, 타이틀, 콜텐츠 등 속성이 설정되어 있음.

const PageTemplate = ({children}) =>{
    return(
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;