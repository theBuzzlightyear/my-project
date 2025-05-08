import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBullets extends Struct.ComponentSchema {
  collectionName: 'components_components_bullets';
  info: {
    description: '';
    displayName: 'Bullets';
  };
  attributes: {
    bullet: Schema.Attribute.Component<'components.points', true>;
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    UniqueComponentId: Schema.Attribute.String;
  };
}

export interface ComponentsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_components_carousels';
  info: {
    description: '';
    displayName: 'Carousels';
  };
  attributes: {
    Carousel: Schema.Attribute.Component<'components.slide', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    UniqueComponentId: Schema.Attribute.String;
  };
}

export interface ComponentsPoints extends Struct.ComponentSchema {
  collectionName: 'components_components_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsSection extends Struct.ComponentSchema {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    UniqueComponentId: Schema.Attribute.String;
  };
}

export interface ComponentsSlide extends Struct.ComponentSchema {
  collectionName: 'components_components_slides';
  info: {
    description: '';
    displayName: 'slide';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_components_social_medias';
  info: {
    description: '';
    displayName: 'socialMedia';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface ComponentsSocialNav extends Struct.ComponentSchema {
  collectionName: 'components_components_social_navs';
  info: {
    description: '';
    displayName: 'SocialNav';
  };
  attributes: {
    social: Schema.Attribute.Component<'components.socials', true>;
    Title: Schema.Attribute.String;
    UniqueComponentId: Schema.Attribute.String;
  };
}

export interface ComponentsSocials extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    description: '';
    displayName: 'Socials';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    Social: Schema.Attribute.Component<'components.social-media', true>;
    UniqueComponentId: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.bullets': ComponentsBullets;
      'components.carousel': ComponentsCarousel;
      'components.points': ComponentsPoints;
      'components.section': ComponentsSection;
      'components.slide': ComponentsSlide;
      'components.social-media': ComponentsSocialMedia;
      'components.social-nav': ComponentsSocialNav;
      'components.socials': ComponentsSocials;
    }
  }
}
