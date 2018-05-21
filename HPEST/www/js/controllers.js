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
      path: 'app'
    }, {
      name: 'About Us',
      path: 'app.aboutus'
    }, {
      name: 'Services',
      showSubMenu: false,
      subMenu: [{
        name: 'Residential Pest Control',
        path: '#/app/residential'
      }, {
        name: 'Commercial Pest Control',
        path: '#/app/commercial'
      }, {
        name: 'Environmentally Friendly',
        path: '#/app/environmentally'
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
        name: 'Fruit Flies',
        path: 'app.fruitFlies'
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



.controller('homeCtrl', function($scope) {
  $scope.data = {};

  var setupSlider = function() {
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
    $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
      if (newVal != null) {
        $scope.data.sliderDelegate.on('slideChangeEnd', function() {
          $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
          //use $scope.$apply() to refresh any content external to the slider
          $scope.$apply();
        });
      }
    });
  };

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
      content: 'Even the cleanest of places can fall victim to bed bugs and once inside they spread rapidly. Bed bugs are great hitch hikers and easily travel from place to place in someone’s personal belongings or luggage.'
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
