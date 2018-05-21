angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $ionicSideMenuDelegate) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.menuItems = [{
      name: 'Home',
      path: 'app.home'
    }, {
      name: 'About Us',
      path: 'app.aboutus'
    }, {
      name: 'Services',
      showSubMenu: false,
      subMenu: [{
        name: 'Residential Pest Control',
        path: 'app.residentialPestControl'
      }, {
        name: 'Commercial Pest Control',
        path: 'app.commercialPestControl'
      }, {
        name: 'Environmentally Friendly',
        path: 'app.environmentallyFriendly'
      }]
    }, {
      name: 'Pests',
      showSubMenu: false,
      subMenu: [{
        name: 'Ants',
        path: 'app.ants'
      }, {
        name: 'Box Elder Bugs',
        path: 'app.boxElderBugs'
      }, {
        name: 'Fruit Flies',
        path: 'app.fruitFlies'
      }, {
        name: 'Mosquitoes',
        path: 'app.mosquitoes'
      }, {
        name: 'Stink Bugs',
        path: 'app.stinkBugs'
      }, {
        name: 'Bats',
        path: 'app.bats'
      }, {
        name: 'Earwing',
        path: 'app.earwing'
      }, {
        name: 'Gnats',
        path: 'app.gnats'
      }, {
        name: 'Rats',
        path: 'app.rats'
      }, {
        name: 'Termites',
        path: 'app.termites'
      }, {
        name: 'Bed Bugs',
        path: 'app.bedBugs'
      }, {
        name: 'Flies',
        path: 'app.flies'
      }, {
        name: 'Millipedes',
        path: 'app.millipedes'
      }, {
        name: 'Snakes',
        path: 'app.snakes'
      }, {
        name: 'Weevils',
        path: 'app.weevils'
      }, {
        name: 'Birds',
        path: 'app.birds'
      }, {
        name: 'Fleas',
        path: 'app.fleas'
      }, {
        name: 'Mites',
        path: 'app.mites'
      }, {
        name: 'Squirrel',
        path: 'app.squirrel'
      }]
    }, {
      name: 'Careers',
      path: 'app.careers'
    }, {
      name: 'Contact Us',
      path: 'app.contactus'
    }];

    $scope.navigateToMenu = function (menu) {
      if (menu.path) {
        $scope.menuItems.forEach(menu => {
          if (menu.subMenu)
            menu.showSubMenu = false;
        });
        $ionicSideMenuDelegate.toggleLeft();
        $state.go(menu.path, {});
      } else if (!menu.path && menu.subMenu) {
        menu.showSubMenu = !menu.showSubMenu;
      }
    }
  })

  .controller('contactusCtrl', function ($scope) {})

.controller('homeCtrl', function($scope,$state) {
    $scope.data = {};

    var setupSlider = function () {
      //some options to pass to our slider
      $scope.data.sliderOptions = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 3000, //0.3s transition
        autoplay: 300
      };

      $scope.data.slider2Options = {
        initialSlide: 4,
        direction: 'horizontal', //or vertical
      };

      //create delegate reference to link with slider
      $scope.data.sliderDelegate = null;

      //watch our sliderDelegate reference, and use it when it becomes available
      $scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
        if (newVal != null) {
          $scope.data.sliderDelegate.on('slideChangeEnd', function () {
            $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
            //use $scope.$apply() to refresh any content external to the slider
            $scope.$apply();
          });
        }
      });
    };

  $scope.navigateTo = function (path) {
    $state.go(path, {});
  }

    setupSlider();

  })

  .controller('batsCtrl', function ($scope) {
    $scope.batsData = [{
      header: 'Habitat',
      showContent: false,
      content: 'Ideal foraging sites for bats include open fields, marsh areas, and grasslands where they can freely hunt for insects. Bridges, caves, and rock crevices where the pests can hang from ceilings to rest during the daytime serve as the perfect roosting sites for communal species. Solitary bats may choose to roost in hollow trees or underneath overhanging ledges.'
    }, {
      header: 'Diet',
      showContent: false,
      content: 'Using echolocation, bats hunt flying insects at night. Some of their favourite meals include moths, beetles, mosquitoes, and ants. The animals hunt all night long, often eating 100 percent of their bodyweight over the course of a single evening.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Baby bats are born in the spring or early summer. They are cared for by their mothers and cling to the roofs of their roosts until they grow old enough to fly and hunt on their own. During winter, bats either find a warm place to hibernate or migrate to the warmer climates.'
    }, {
      header: 'Problems Caused by Bats',
      showContent: false,
      content: 'One of the most serious threats posed by bats is their droppings. The pests deposit their guano wherever they roost. If enough guano accumulates in places like attics, ceilings may sag and collapse. In addition to the structural damage it causes, bat droppings stain walls and cultivate the growth of Histoplasmosis. Bats have sharp teeth and are capable of biting when they feel threatened, which increases the risk of rabies.'
    }, {
      header: 'Signs of Infestation',
      showContent: false,
      content: 'Inside houses, bats can be heard rustling in attics or squeaking. Spotting their droppings on home exteriors also indicates the presence of bat infestations. Alternatively, homeowners can wait outside until dusk and watch for bats exiting attic roosts.'
    }, {
      header: 'Prevention',
      showContent: false,
      content: 'To prevent bats from taking up residence inside attics, homeowners should seal up all possible entrances such as open attic windows, gaps in siding, uncovered chimneys, and exposed vents. However, care should be taken not to seal bats inside.'
    }, {
      header: 'Trapping / Control / Removal',
      showContent: false,
      content: 'Attempting to handle bats can result in injury or illness. Inexperienced homeowners should never try to remove bats on their own. Instead, call the wildlife control experts at HPests Control Services. Our bat removal technicians can safely take care of bats in the attic, sanitize affected areas, and help seal the home against future bat infestations.'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.batsData, function (batdata, batDataIndex) {
        if (batDataIndex != index) {
          batdata.showContent = false;
        } else if (batDataIndex == index)
          batdata.showContent = !batdata.showContent;
      });
    }
  })

  .controller('bedBugsCtrl', function ($scope) {
    $scope.bedBugsData = [{
      header: 'Identification',
      showContent: false,
      content: '<p>- Has seen a resurgence over the past years.</p><p> - Adults are approximately 4 to 5 mm long, size of an apple seed.</p><p> - Does not have wings; does not fly.</p><p> - Coloured reddish brown, with abdomen darker as blood is digested.</p><p> - Males exhibit a much more tapered abdomen than females.</p><p> - Reaction to bites vary from individual to individual, ranging from none to mild to severe</p>'
    }, {
      header: 'Habitat and Behaviour',
      showContent: false,
      content: '<p>- Prefers dark, undisturbed areas near host.</p> <p>- Hides in crevices in furniture and baseboards near beds.</p> - <p>Is attracted by carbon dioxide and warmth that humans emit.</p> <p>- A potential problem in dwellings with high turnover (e.g. hotels and motels).</p> <p> - Ability to move to different rooms in multi-unit buildings.</p><p> - Often brought in on luggage or used furniture.</p> <br>Bedbugs are small, nocturnal, wingless insects belonging to the insect family of Cimicidae.  They feed on humans and other warm blooded animals. They are an oval shape and are up to 4-5 mm long when fully grown. Adult bed bugs have a flattened body and their skin colour is either rust brown or a deeper red brown. Nymph bed bugs are clear or a yellowish colour and are generally 1-4mm long. Bed bugs have two antennae and six legs. Red more on what a bed bug looks like. <br><br>Bed bugs have been known to travel over 20 feet from hiding in order to feed but will generally hide within 3-6 feet of their host. <br><br> Due to the flattened body of a bed bug they can easily hide in small places such as baseboards, cracks in floors, under carpets, behind loose wallpaper, bed frames, sofas, behind picture frames and many other places which makes them very difficult to detect. They tend to stay together and large infestations will give off a sweet but unpleasant smell.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: '<p>- Undergoes gradual metamorphosis (egg, nymph, adult).</p><p>- Nymphs are smaller versions of the adults and will go through several molts until fully grown.</p><p>- Female lays 200 to 500 eggs in her lifetime, 10 to 50 at a time, on rough surfaces.</p><p>- Eggs hatch in 6 to 17 days.</p><p> - Adults can survive over 1 year without feeding.</p>'
    }, {
      header: 'How Do You Get Bed Bugs?',
      showContent: false,
      content: 'Bed bugs do not cling to people but they can accidentally get caught up in our belongings (i.e. suitcase, purse, laptop bags). From there they can move from their current home into new ones in homes, hotels, offices, hospitals, or any other building as well as modes of transportation. Sanitation and cleanliness of a property is not an issue as bed bugs are notorious hitch hikers and can show up almost anywhere.'
    }, {
      header: 'Bed Bugs are not a Sanitation issue.',
      showContent: false,
      content: 'Even the cleanest of places can fall victim to bed bugs and once inside they spread rapidly. Bed bugs are great hitch hikers and easily travel from place to place in someone�s personal belongings or luggage.'
    }, {
      header: 'Where have you been finding the bed bugs?',
      showContent: false,
      content: 'Bed bugs are not limited to any one particular kind of dwelling. They have been found in houses, multi-family dwellings, apartments, hotels, airplanes and hospitals. Sanitation or cleanliness is not an issue in where you can find bed bugs.'
    }, {
      header: 'Why are bed bugs back?',
      showContent: false,
      content: 'Bed bugs never really left. They are common in many nations around the world. We are seeing a resurgence in North America for several reasons including a reduced use of pesticides, the use of second hand furniture and increased international travel as bed bugs are notorious hitch hikers.'
    }, {
      header: 'How Do You Get Bed Bugs?',
      showContent: false,
      content: '<b>Once established, bed bugs tend to stay, but can spread due to any of the following;</b><p>- Being disturbed (i.e. disassembling furniture or incorrect pesticide application).</p><p>- A food shortage (i.e. no host) may cause them to migrate to neighbouring rooms.</p><p>- A shortage of harbourage spaces may cause them to migrate to neighbouring rooms.</p><p>- Infested furniture moved down a hall, or passed on to others.</p><p>- Vacuum cleaners used for multiple rooms.</p><p>- Commercial laundry machines.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.bedBugsData, function (bedBugdata, bedBugIndex) {
        if (bedBugIndex != index) {
          bedBugdata.showContent = false;
        } else if (bedBugIndex == index)
          bedBugdata.showContent = !bedBugdata.showContent;
      });
    }
  })

  .controller('boxElderBugsCtrl', function ($scope) {
    $scope.boxElderBugsData = [{
      header: 'Appearance / Identification',
      showContent: false,
      content: 'The bodies of box elder bugs are black in color and are marked by red lines along the thorax and sides. Their wings are flat and red. Box elder bugs measure between 11 to 14 mm long.'
    }, {
      header: 'Behavior, Diet & Habits',
      showContent: false,
      content: 'Box elder bugs do not nest indoors year-round. Rather, they make their homes in box elder, maple and ash trees during warmer seasons and migrate into buildings and homes to find shelter for the winter.They enter through small cracks and crevices within the building, and remain inside, hibernating, through fall and winter. They emerge when heat sources within the building are high and can be located in the warmest areas of a structure’s walls. While they do not cause damage to buildings, their droppings are unsightly and leave stains on furniture and linens.<br><br>Adult bugs live and breed on the leaves of box elder trees, laying their eggs in spring. They feed on soft parts of box elder trees, including leaves, flowers and new twigs. They also extract juices, causing minimal to substantial damage to their host tree. Find out more about box elder bug behavior and whether they bite.'
    }, {
      header: 'Reproduction',
      showContent: false,
      content: 'The eggs of box elder bugs are reddish brown in color, allowing them to stay well hidden in the bark of the host tree. After a few days, the eggs hatch into red and gray nymphs, which eventually mature and begin the breeding process again. Mature box elder bugs can be found gathering in large numbers on branches and boughs. Concentrations will be heaviest in areas receiving sufficient sunlight. Read more details about the box elder bug life cycle.'
    }, {
      header: 'Signs of a Box Elder Bug Infestation',
      showContent: false,
      content: 'Like many overwintering pests, the most startling sign is the bugs when they invade in staggering numbers. They usually appear on sunny sides of buildings in the fall. They invade the voids of the building to overwinter. While overwintering, they do not feed or reproduce. Find out more about box elder bug infestations.'
    }, {
      header: 'Prevention',
      showContent: false,
      content: 'To stop box elder bugs from multiplying, it is often helpful to remove their host trees from the area surrounding your home, but the adults can still fly from locations off the property. If you choose to plant box elder trees in your yard, choose male trees: (non-seed-bearing) since female box elder trees are more susceptible to infestation. However, box elder trees are not recommended for ornamental planting. These insects can also enter through windows and doors; ensure that these close properly and utilize screen doors to keep box elder bugs from entering. Read more details about box elder bugs in the house.'
    }, {
      header: 'How HPests treats for box elder bugs',
      showContent: false,
      content: '<p>- Repairing damaged windows and door screens.</p><p>- Installing door sweeps on exterior doors.- Installing or repairing screens in roof and soffit vents.</p><p>- Sealing holes or gaps around places where cables, wires or plumbing enters the building.</p><p>- Plugging gaps at doors, windowsills, roof joints, and fascia boards. Checking for and sealing gaps and cracks where different building materials meet. For example, where siding meets the brick exterior or foundation.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.boxElderBugsData, function (boxElderBugData, boxElderBugIndex) {
        if (boxElderBugIndex != index) {
          boxElderBugData.showContent = false;
        } else if (boxElderBugIndex == index)
          boxElderBugData.showContent = !boxElderBugData.showContent;
      });
    }
  })

  .controller('fruitFliesCtrl', function ($scope) {
    $scope.fruitFliesData = [{
      header: 'Identification',
      showContent: false,
      content: '- Coloured tan/yellow to light brown, with bright red eyes.- Approximately 2.5 to 4 millimeters.- Three segments in the antennae, third segment appears to be a feathery bristle'
    }, {
      header: 'What Attracts Fruit Flies',
      showContent: false,
      content: 'Fruits flies enter homes to seek out food and breeding sources. Fruits flies are generally attracted by fermenting fruits, vegetables or moist decaying organic matter. Such fermentations or decays are caused by yeast or other fungi. The larvae feed on the yeast and other micro-organisms in the fermenting materials. The presence of readily available fruits and vegetables in homes, food processing and handling facilities makes these structures primary target of fruit flies. Adult fruit flies do not necessarily eat the fruit, but instead the fermenting material provides the larvae with a ready-made food source.'
    }, {
      header: 'Problems/Damage',
      showContent: false,
      content: 'Fruit flies are a major concern to everyone concerned about the safety of food supply: storage, and manufacturing, agriculture, restaurants and food service industries, and their customers. Fruit flies cause a high percentage of insect contamination of fruit and fruit products by depositing bacteria and other disease causing organisms.<br><br>Fruit flies have sponging mouthparts, similar to houseflies. That means in order for a fruit fly to enjoy a meal it must deposit its saliva onto food and then suck up the solution. The process inevitably leaves behind bacteria that were once inside the fly as well as on their legs and bodies.'
    }, {
      header: 'Habitat and Behaviour',
      showContent: false,
      content: 'Fruit flies are found all around the world and almost everywhere one can find exposed food. Restaurants, hotels, cafeterias, farmer’s markets, trash receptacles, recycling areas, dumpsters, beverage stations, and janitorial closets are some of their favourite areas.<br><br>For many years, fruit flies were thought to spontaneously generate on ripe and rotting produce, but that myth has been disproven. In most cases, fruit flies have either found their way inside the home by following the odours of ripe fruit or have been transported there along with the produce. This not only underlines the importance of washing the fruits and vegetables that are brought into the home, but also means that you should not keep excess quantities of produce exposed.<br><br>Females lay approximately 400 eggs, about five at a time, into rotting fruit or other suitable materials. The eggs, which are about 0.5 millimeters long, hatch after 12-15 hours. The larvae grow for about 4 days, during which time they consume the yeast and microorganisms which decompose the fruit as well as the sugar of the fruit itself.'
    }, {
      header: 'Life Cycle',
      showContent: false,
      content: 'Fruit flies are known for their rapid reproduction and relatively short lifespans. The average lifespan of a fruit fly is about 40 to 50 days. The fruit fly life cycle is made up of four stages: egg, larva, pupa, and adult. Most of the fly’s life is spent as an adult, with development usually taking less than two weeks. Developmental time and overall lifespan is largely influenced by environmental conditions such as temperature and humidity. High temperatures quicken development and may extend lifespans, whereas cooler temperatures may prolongs larval and pupal development and kill off adults.<br><br>The fruit fly life cycle begins when a female fruit fly lays a batch of eggs, which usually consists of around 500 eggs. Under the right conditions, a fruit fly egg only takes about a day to hatch. The newly hatched larvae then develop through three instars stages, with the entire process lasting about five days. A larva then encloses itself in a hard case for the pupal stage, which takes about five days. After emerging from the pupal case, the fruit fly reaches adulthood. Females may begin procreating within within two days.'
    }, {
      header: 'Infestations',
      showContent: false,
      content: 'The most visible sign of fruit fly infestation is the presence of the adults. Usually seen swarming around fruits and vegetables left out on kitchen or commercial countertops or in and around refuse bins and other receptacles in which foods are disposed, fruit flies congregate en masse and feed on the decaying materials until food sources shore up (?). Fruit flies typically remain in areas with suitable food sources. Diners, bars, cafes, and restaurants often need to take special precautions to limit fruit fly infestations. Stowing raw, whole foods in refrigerated or vacuum-sealed units also helps to prevent fruit fly infestations.'
    }, {
      header: 'Tips for prevention and control',
      showContent: false,
      content: '<b>These tips may help you get rid of fruit flies in your home:</b><p>- Reduce the presence of ripe fruits and vegetables; place them in a refrigerator or a paper bag.</p><p>- Close the lids on all garbage and waste containers.</p><p>- Clean up and spills and inspect the environment for potential breeding areas; dirty sponges and washcloths, drains, broken tiles, and standing water.</p><p>- Degrease and clean drains and sink areas.</p>'
    }];

    $scope.showHeaderContent = function (index) {
      angular.forEach($scope.fruitFliesData, function (fruitFlyData, fruitFlyIndex) {
        if (fruitFlyIndex != index) {
          fruitFlyData.showContent = false;
        } else if (fruitFlyIndex == index)
        fruitFlyData.showContent = !fruitFlyData.showContent;
      });
    }
  })
