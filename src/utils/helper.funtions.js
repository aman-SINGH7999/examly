const formatDateTime = (date) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      day: 'numeric',
      month: 'numeric',
      year: '2-digit'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

module.exports = {
    formatDateTime
}