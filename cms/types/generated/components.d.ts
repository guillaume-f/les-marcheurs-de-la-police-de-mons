import type { Schema, Struct } from '@strapi/strapi';

export interface ComiteMembreDuComite extends Struct.ComponentSchema {
  collectionName: 'components_comite_membre_du_comite';
  info: {
    displayName: 'Membre du comit\u00E9';
    icon: 'user';
  };
  attributes: {
    Boite: Schema.Attribute.String;
    Code_postal: Schema.Attribute.String;
    Commune: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Fonction: Schema.Attribute.String;
    Nom: Schema.Attribute.String & Schema.Attribute.Required;
    Numero: Schema.Attribute.String;
    Prenom: Schema.Attribute.String & Schema.Attribute.Required;
    Rue: Schema.Attribute.String;
    Tel: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    menu: Schema.Attribute.Component<'navigation.menu-item', true>;
    Nom: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'menuItem';
  };
  attributes: {
    Label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'comite.membre-du-comite': ComiteMembreDuComite;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'navigation.menu-item': NavigationMenuItem;
    }
  }
}
