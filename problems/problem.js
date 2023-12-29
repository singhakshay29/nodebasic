//How many users are active ?
[
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "isActiveUser",
  },
];
//what is the avg age of all users ?
[
  {
    $group: {
      _id: null,
      avgAge: {
        $avg: "$age",
      },
    },
  },
][
  //List the top 2 most common fav fruit of user
  ({
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 2,
  })
];
//Find the total number of males and females

[
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  },
][
  //which country has highest number of user
  ({
    $group: {
      _id: "$company.location.country",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 1,
  })
];
//list all the unique color in user
[
  {
    $group: {
      _id: "$eyeColor",
    },
  },
];
//what is the avg num of tags per user
[
  {
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      tags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      avg: {
        $avg: "$tags",
      },
    },
  },
][
  //2nd method
  ({
    $addFields: {
      numOfTags: {
        $size: {
          $ifNull: ["$tags", []],
        },
      },
    },
  },
  {
    $group: {
      _id: null,
      avg: { $avg: "$numOfTags" },
    },
  })
];
//How many users have 'enim' as one of tags

[
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "tagsWithenim",
  },
][
  //what are name and age of users who are unactive and have tags as 'velit'

  ({
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
      eyeColor: 1,
    },
  })
];

// who has registered the most recently

[
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      name: 1,
      registered: 1,
      age: 1,
      eyeColor: 1,
    },
  },
][
  //categorized users by their fav fruits

  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name",
      },
      count: {
        $sum: 1,
      },
    },
  }
];
//How many user have 'ad' as the second tag in list of tag

[
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "secondTag_ad",
  },
][
  //find user who have both 'enim' and 'id' as tag

  ({
    $match: {
      tags: { $all: ["enim", "id"] },
    },
  },
  {
    $count: "matchFindusers",
  })
];

//List all companies located in USA with their corresponding user count

[
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      usercount: { $sum: 1 },
    },
  },
];
