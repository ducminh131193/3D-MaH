<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '3d-MaH' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'GWDR+/^r{|zbO:LAD99EEE1`m04{LRVF`3q8w.4zfF}Y[gfAm.E0XNbl:mUwt)}V' );
define( 'SECURE_AUTH_KEY',  'TM3WFwj%O<YV&9(TX;E/2[po^&{^Q/Wn[@<>!ux6Ivz8cvuC0=,)4M#u2^hcH5$o' );
define( 'LOGGED_IN_KEY',    'J(<QG _q0Jps*A~#+IH.y?tnLB5#:x57?wP!cZ)nW<c;H 1UkWoTV.A~YpK>7m4C' );
define( 'NONCE_KEY',        '-|kWoq^e)(*./wS:>G6GqM`r[j]JqK8lvzO#~|$,]Tzih_.ec5*}Rb}m`?YTZ~4A' );
define( 'AUTH_SALT',        '#|^adnl1`;,<b5h]+jS0?T5eb^Aj[#+BhnL;9+hp2sYHraUTB.ggUC .,^AD#/(G' );
define( 'SECURE_AUTH_SALT', '7:M^v$&:O:S9tTv5BD,H)@9j#:a*a[GdC-Yn<J|)$=pR0Q~t=GV~|g)LeCXYtBJ0' );
define( 'LOGGED_IN_SALT',   'k0.W1@(Ob9c5K{n+MdN,YzuQaV>Wy]jBJM{`AvJ8kIlA<S$a}8[_bens>>3@]Ru1' );
define( 'NONCE_SALT',       'XA%H#sn:YD010/uNtqj4oK^E.^eOLq0s@Ssw#oOk[ qf,bLytFYvwK hYWb 8>!|' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

//Change URL to access to home web page localhost/3D-MaH
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] .'/3D-MaH');
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] .'/3D-MaH');

// Add custom type of file to upload
define('ALLOW_UNFILTERED_UPLOADS', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
