export const fetchAPI = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    // HTTP / server errors
    if (!res.ok) {
      return {
        success: false,
        error: `Server Error: ${res.status} ${res.statusText}`,
      };
    }

    let data;

    try {
      data = await res.json();
    } catch {
      return {
        success: false,
        error: "Failed to parse JSON from server",
      };
    }

    // Empty data checks
    if (
      data === null ||
      (Array.isArray(data) && data.length === 0) ||
      (typeof data === "object" && Object.keys(data).length === 0)
    ) {
      return {
        success: false,
        error: "No data found",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      error: "Network error — please check your connection",
    };
  }
};
