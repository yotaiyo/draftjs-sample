export var COLORS = [
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
];

export const colorStyleMap = {
    red: {
      color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
      color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
      color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
      color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
      color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
      color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
      color: 'rgba(127, 0, 255, 1.0)',
    },
};

export const styles = {
    root: {
      fontFamily: '\'Georgia\', serif',
      fontSize: 14,
      padding: 20,
      width: 600,
    },
    editor: {
      borderTop: '1px solid #ddd',
      cursor: 'text',
      fontSize: 16,
      marginTop: 20,
      minHeight: 400,
      paddingTop: 20,
    },
    controls: {
      fontFamily: '\'Helvetica\', sans-serif',
      fontSize: 14,
      marginBottom: 10,
      userSelect: 'none',
    },
    styleButton: {
      color: '#999',
      cursor: 'pointer',
      marginRight: 16,
      padding: '2px 0',
    },
};