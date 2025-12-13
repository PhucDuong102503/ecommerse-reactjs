import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
    styles;

  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item) => (
            <BoxIcon key={item.type} type={item.type} href={item.href} />
          ))}
        </div>

        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item, idx) => (
            <Menu
              key={item.content + idx}
              content={item.content}
              href={item.href}
            />
          ))}
        </div>
      </div>

      <div>
        <img
          src={Logo}
          alt='Logo'
          style={{
            width: '153px',
            height: '53px',
          }}
        />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map((item, idx) => (
            <Menu
              key={item.content + idx}
              content={item.content}
              href={item.href}
            />
          ))}
        </div>
        <div className={containerBoxIcon}>
          <img width={26} height={26} src={reloadIcon} alt='reloadIcon' />
          <img width={26} height={26} src={heartIcon} alt='heartIcon' />
          <img width={26} height={26} src={cartIcon} alt='cartIcon' />
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
