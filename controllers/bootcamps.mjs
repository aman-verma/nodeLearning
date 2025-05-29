//@desc     get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
export const getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

//@desc     get single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
export const getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Show bootcamp for ${req.params.id}` });
};

//@desc     create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Public
export const createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Created bootcamp for ${req.params.id}` });
};

//@desc     update bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Public
export const updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Updated bootcamp for ${req.params.id}` });
};

//@desc     delete botcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Public
export const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Deleted bootcamp for ${req.params.id}` });
};
