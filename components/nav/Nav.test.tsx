import { render, screen } from '@testing-library/react';
import Nav, { navSectionsArray } from './Nav';

describe('Nav component tests', () => {
  test('Renders correctly', () => {
    render(<Nav />);
  });

  test('Should have a phone icon allowing to call Oostaoo', () => {
    render(<Nav />);
    const phoneLink = screen.getByRole('link', { name: '01 42 63 77 27' });
    const phoneInfo = phoneLink.getAttribute('href');

    expect(phoneLink).toBeInTheDocument();
    expect(phoneInfo).toMatch('tel:+330142637727');
  });

  test('Should have a mail icon allowing to mail Oostaoo', () => {
    render(<Nav />);
    const mailLink = screen.getByRole('link', { name: 'contact@oostaoo.com' });
    const mailInfo = mailLink.getAttribute('href');

    expect(mailLink).toBeInTheDocument();
    expect(mailInfo).toMatch('mailto:contact@oostaoo.com');
  });

  test('Should have a Facebook icon allowing to check Oostaoo FB page', () => {
    render(<Nav />);
    const faceImg = screen.getByAltText('logo facebook');
    const faceLink = faceImg.closest('a');
    const faceAttr = faceLink?.getAttribute('href');

    expect(faceImg).toBeInTheDocument();
    expect(faceAttr).toBe('https://www.facebook.com/oostaoo/');
  });

  test('Should have a Twitter icon allowing to check Oostaoo FB page', () => {
    render(<Nav />);
    const twitImg = screen.getByAltText('logo twitter');
    const twitLink = twitImg.closest('a');
    const twitAttr = twitLink?.getAttribute('href');

    expect(twitImg).toBeInTheDocument();
    expect(twitAttr).toBe('https://twitter.com/oostaoo?lang=fr');
  });

  test('Should have a Linkedin icon allowing to check Oostaoo FB page', () => {
    render(<Nav />);
    const linkdnImg = screen.getByAltText('logo linkedin');
    const linkdnLink = linkdnImg.closest('a');
    const linkdnAttr = linkdnLink?.getAttribute('href');

    expect(linkdnImg).toBeInTheDocument();
    expect(linkdnAttr).toBe(
      'https://www.linkedin.com/company/oostaoo-consulting/',
    );
  });

  test('Should have the oostaoo logo', () => {
    render(<Nav />);
    const logo = screen.getByAltText('logo Oostaoo');

    expect(logo).toBeInTheDocument();
  });

  test('Should display the correct number of buttons on the navbar based on the navSectionsArray array', () => {
    render(<Nav />);
    const allNavBtns = screen.getAllByRole('button');
    const navLength = navSectionsArray.length;

    expect(allNavBtns).toHaveLength(navLength);
  });
});
