import { Scene } from 'phaser';
import {SkinsAndAnimationBoundsProvider} from "@esotericsoftware/spine-phaser-v3";

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.setPath('assets/spine/goblins/'); 

        this.load.spineAtlas('goblins-atlas', 'player_31_gameplay.atlas');
        this.load.spineJson('goblins', 'player_31_gameplay.json');
    }

    create() {
        const goblin = this.add.spine(550, 630, "goblins", "goblins-atlas", 
            new SkinsAndAnimationBoundsProvider(null, ["default"])
        );
        goblin.skeleton.setSkinByName("default");
        goblin.animationState.setAnimation(0, 'reload', true);
        goblin.scale = 0.5;

        const button = this.add.text(520, 100, 'change');

        let isReload = false;

        button.setInteractive({ useHandCursor: true });

        button.on('pointerdown', () => {
            isReload = !isReload;
            if (isReload) {
                goblin.animationState.setAnimation(0, 'shoot', true);
            } else {
                goblin.animationState.setAnimation(0, 'reload', true);
            } 
        });
    }

}   
